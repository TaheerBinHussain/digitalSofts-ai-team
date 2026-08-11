
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ContactForm(BaseModel):
    name: str
    email: str
    message: str

# Home Page
@app.get('/')
def read_root():
    return {'message': 'Welcome to our website', 'logo': 'Company Logo', 'mission': 'Our mission is to provide the best service possible'}

# About Page
@app.get('/about')
def read_about():
    return {'history': 'Our company was founded in 2020', 'team_members': ['John Doe', 'Jane Doe'], 'contact': 'contact@example.com'}

# Contact Page
@app.get('/contact')
def read_contact():
    return {'address': '123 Main St', 'phone': '123-456-7890', 'email': 'contact@example.com', 'form': 'Contact Form'}

@app.post('/contact/submit')
def submit_contact(form: ContactForm):
    return {'message': 'Form submitted successfully', 'name': form.name, 'email': form.email, 'message': form.message}
      