from flask import Flask
from passes_graph import giveFig
from plot_fbref import giveFig as giveFig2
import mpld3
app = Flask(__name__)

@app.route('/passes', methods=['GET'])
def hello_world():
    return mpld3.fig_to_html(giveFig(),no_extras=True) 

@app.route('/dominations', methods=['GET'])
def hello_world2():
    return mpld3.fig_to_html(giveFig2(),no_extras=True)

if __name__ == '__main__':
    app.run(port=5328)
