const ApiUrls = {};

ApiUrls.baseUrl = 'http://ec2-3-110-31-56.ap-south-1.compute.amazonaws.com:4000/api/v1';
ApiUrls.devBaseUrl = 'http://localhost:4000/api/v1';

ApiUrls.loginEndpoint = '/admin/login';
ApiUrls.logoutEndpoint = '/admin/logout';
ApiUrls.forgotPasswordEndpoint = '/admin/forgot-password';
ApiUrls.resetPasswordEndpoint = '/admin/reset-password';
ApiUrls.changePasswordEndpoint = '/admin/change-password';

ApiUrls.getProfileEndpoint = '/me';
ApiUrls.getUsersEndpoint = '/admin/users';
ApiUrls.getUserDetailsEndpoint = '/admin/users/:id';
ApiUrls.createNewUserEndpoint = '/admin/users/create';
ApiUrls.updateUserEndpoint = '/admin/users/:id/update';
ApiUrls.deleteUserEndpoint = '/admin/users/:id/delete';

ApiUrls.getProgressEndpoint = '/admin/get-progress';
ApiUrls.getStatsEndpoint = '/admin/get-stats';

export default ApiUrls;