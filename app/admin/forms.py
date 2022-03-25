from wtforms import form, fields


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
