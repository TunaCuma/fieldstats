from flask import Flask
from passes_graph import giveFig
from plot_fbref import giveFig as giveFig2
import mpld3
from mpld3._display import NumpyEncoder
import json
app = Flask(__name__)


@app.route('/passes', methods=['GET'])
def hello_world():
    return json.dumps(mpld3.fig_to_dict(giveFig()) , cls=NumpyEncoder)

@app.route('/dominations', methods=['GET'])
def hello_world2():
    return json.dumps(mpld3.fig_to_dict(giveFig2()) , cls=NumpyEncoder)

if __name__ == '__main__':
    app.run(port=5328)
