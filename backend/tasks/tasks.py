import time

from api.celery import app


@app.task
def task():
    # time.sleep(3)

    print("Hello")
