from flask_admin import AdminIndexView, expose
from werkzeug.security import generate_password_hash

from app.admin.decorators import admin_access
from app.admin.forms import UserForm, OrganisationForm
from app.admin.flask_admin.views import CustomModelView


# Customized admin views
class DashboardView(AdminIndexView):
    @admin_access
    def _handle_view(self, name, **kwargs):
        super(DashboardView, self)._handle_view(name, **kwargs)

    def is_visible(self):
        # This view won't appear in the menu structure
        return False

    @expose('/')
    def index(self):
        return self.render('admin/home.html')



class UserView(CustomModelView):
    column_list = ('username', 'email',)
    column_sortable_list = ('username', 'email',)

    form = UserForm

    @admin_access
    def _handle_view(self, name, **kwargs):
        super(UserView, self)._handle_view(name, **kwargs)

    # Making the password not editable on edit
    def on_form_prefill(self, form, id):
        form.password.render_kw = {'readonly': True}

    def on_model_change(self, form, model, is_created):
        # If creating a new user, hash password
        if is_created:
            model['password'] = generate_password_hash(form.password.data)
        else:
            old_password = form.password.object_data
            # If password has been changed, hash password
            if not old_password == model['password']:
                model['password'] = generate_password_hash(form.password.data)


class OrganisationView(CustomModelView):
    column_list = ['organisation_name', 'latitude', 'longitude', 'nace_1',
                      'nace_1_label', 'nace_2', 'nace_2_label', 'nace_3',
                      'nace_3_label', 'web_address']
    column_sortable_list = ('organisation_name', 'latitude', 'longitude',
                              'nace_1', 'nace_1_label', 'nace_2',
                              'nace_2_label', 'nace_3', 'nace_3_label',
                              'web_address')

    form = OrganisationForm

    @admin_access
    def _handle_view(self, name, **kwargs):
        super(OrganisationView, self)._handle_view(name, **kwargs)
