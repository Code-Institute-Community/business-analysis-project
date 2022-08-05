from wtforms import form, fields

from app.favourites import get_categories, get_categories_as_tuple


class UserForm(form.Form):
    username = fields.StringField('Userame')
    email = fields.StringField('Email')
    password = fields.StringField('Password')
    is_active = fields.BooleanField('Is active', default=True)
    is_admin = fields.BooleanField('Is admin', default=False)


class OrganisationForm(form.Form):
    organisation_name = fields.StringField('Organisation Name')
    latitude = fields.StringField('Latitude')
    longitude = fields.StringField('Longitude')
    nace_1 = fields.StringField('Nace 1')
    nace_1_label = fields.StringField('Nace 1 Label')
    nace_2 = fields.StringField('Nace 2')
    nace_2_label = fields.StringField('Nace 2 Label')
    nace_3 = fields.StringField('Nace 3')
    nace_3_label = fields.StringField('Nace 3 Label')
    web_address = fields.StringField('Web Address')
    website_text = fields.StringField('Website Text')
    keywords = fields.StringField('Keywords')
    category = fields.SelectField('Category', choices=get_categories())

class CategoryForm(form.Form):
    name = fields.StringField('Name')
    keywords = fields.StringField('Keywords')


class OrganisationEditForm(form.Form):
    category = fields.SelectField('Category', choices=get_categories_as_tuple())
