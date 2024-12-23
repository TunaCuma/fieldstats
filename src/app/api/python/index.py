from flask import Flask, Response, stream_with_context, request
import mpld3
import time
from mpld3._display import NumpyEncoder
import json

app = Flask(__name__)

def optimize_frame_data(frame):
    return {
        "frame_index": frame["frame_index"],
        "objects": [
            {
                "color": obj["color"],
                "team_index": obj["team_index"],
                "source": obj["source"],
                "transformed_center": [
                    round(obj["transformed_center"][0], 2),
                    round(obj["transformed_center"][1], 2)
                ]
            }
            for obj in frame["objects"]
        ]
    }

def get_total_frames():
    with open('src/app/api/python/data.json', 'r') as file:
        data = json.load(file)
        return len(data)

def stream_large_json(filename, start_frame=0):
    with open(filename, 'r') as file:
        data = json.load(file)
        
        # Start from the requested frame
        for frame in data[start_frame:]:
            optimized_frame = optimize_frame_data(frame)
            frame_json = json.dumps(optimized_frame)
            
            yield f"data: {frame_json}\n\n"
            time.sleep(1/60)  # 60 FPS

@app.route('/stream-frames')
def stream_frames():
    start_frame = request.args.get('start_frame', default=0, type=int)
    return Response(
        stream_with_context(stream_large_json('src/app/api/python/data.json', start_frame)),
        mimetype='text/event-stream'
    )

@app.route('/total-frames')
def get_frames_count():
    return {"total_frames": get_total_frames()}

if __name__ == '__main__':
    app.run(port=5328)
