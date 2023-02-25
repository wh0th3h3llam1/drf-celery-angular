# DRF Celery Angular Project

## Backend

> Django(4.1.7), Django REST Framework (DRF)(3.14.0), Celery(5.2.7)

### Setup & Run

- Create a virtual envionment and activate it
- Navigate into backend folder, and run `pip install -r requirements.txt`
- Run Django Server using `python manage.py runserver`
- Make sure Redis is running on port `6379`
- Run celery using `celery -A api worker -l INFO`


## Frontend

> Angular (14.2.1)

### Setup & Run

- Navigate into `frontend/project` folder
- Run `npm i`
- After installation, run `ng serve`
