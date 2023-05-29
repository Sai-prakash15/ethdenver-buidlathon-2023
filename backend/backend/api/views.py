from flask import Blueprint, current_app, jsonify
from flask_restful import Api
from marshmallow import ValidationError
from backend.extensions import apispec
from backend.api.resources import UserResource, UserList, DashboardCreator, DashboardViewer, DashboardSaver, DashboardForUser, DashboardFeedback
from backend.api.schemas import UserSchema


blueprint = Blueprint("api", __name__, url_prefix="/api/v1")
api = Api(blueprint)


api.add_resource(UserResource, "/users/<int:user_id>", endpoint="user_by_id")
api.add_resource(UserList, "/users", endpoint="users")
api.add_resource(DashboardCreator, "/dashboard", endpoint="dashboard")
api.add_resource(DashboardViewer, "/dashboard/<dashboard_id>", endpoint="dashboard_view")
api.add_resource(DashboardForUser, "/dashboard/user/<wallet_address>", endpoint="dashboard_for_user")
api.add_resource(DashboardSaver, "/dashboard/<int:dashboard_id>", endpoint="dashboard_saver")


@blueprint.before_request
def register_views():
    apispec.spec.components.schema("UserSchema", schema=UserSchema)
    apispec.spec.path(view=UserResource, app=current_app)
    apispec.spec.path(view=UserList, app=current_app)


@blueprint.errorhandler(ValidationError)
def handle_marshmallow_error(e):
    """Return json error for marshmallow validation errors.

    This will avoid having to try/catch ValidationErrors in all endpoints, returning
    correct JSON response with associated HTTP 400 Status (https://tools.ietf.org/html/rfc7231#section-6.5.1)
    """
    return jsonify(e.messages), 400
