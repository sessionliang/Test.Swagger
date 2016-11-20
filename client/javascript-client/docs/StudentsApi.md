# EducationManageApi.StudentsApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**studentsIdDelete**](StudentsApi.md#studentsIdDelete) | **DELETE** /students/{id} | delete student info
[**studentsIdGet**](StudentsApi.md#studentsIdGet) | **GET** /students/{id} | get student info
[**studentsIdPut**](StudentsApi.md#studentsIdPut) | **PUT** /students/{id} | update student info
[**studentsLoginPost**](StudentsApi.md#studentsLoginPost) | **POST** /students/login | student login
[**studentsRegistePost**](StudentsApi.md#studentsRegistePost) | **POST** /students/registe | student registe


<a name="studentsIdDelete"></a>
# **studentsIdDelete**
> studentsIdDelete(id, apiKey)

delete student info



### Example
```javascript
var EducationManageApi = require('education_manage_api');
var defaultClient = EducationManageApi.ApiClient.default;

// Configure OAuth2 access token for authorization: education_auth
var education_auth = defaultClient.authentications['education_auth'];
education_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EducationManageApi.StudentsApi();

var id = "id_example"; // String | 

var apiKey = "apiKey_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.studentsIdDelete(id, apiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **apiKey** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[education_auth](../README.md#education_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: Not defined

<a name="studentsIdGet"></a>
# **studentsIdGet**
> Student studentsIdGet(id)

get student info



### Example
```javascript
var EducationManageApi = require('education_manage_api');
var defaultClient = EducationManageApi.ApiClient.default;

// Configure OAuth2 access token for authorization: education_auth
var education_auth = defaultClient.authentications['education_auth'];
education_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EducationManageApi.StudentsApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Student**](Student.md)

### Authorization

[education_auth](../README.md#education_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: Not defined

<a name="studentsIdPut"></a>
# **studentsIdPut**
> studentsIdPut(id, body)

update student info



### Example
```javascript
var EducationManageApi = require('education_manage_api');
var defaultClient = EducationManageApi.ApiClient.default;

// Configure OAuth2 access token for authorization: education_auth
var education_auth = defaultClient.authentications['education_auth'];
education_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new EducationManageApi.StudentsApi();

var id = "id_example"; // String | 

var body = new EducationManageApi.Student(); // Student | student' propertyies


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.studentsIdPut(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**Student**](Student.md)| student&#39; propertyies | 

### Return type

null (empty response body)

### Authorization

[education_auth](../README.md#education_auth)

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: Not defined

<a name="studentsLoginPost"></a>
# **studentsLoginPost**
> InlineResponse200 studentsLoginPost(userName, password)

student login



### Example
```javascript
var EducationManageApi = require('education_manage_api');

var apiInstance = new EducationManageApi.StudentsApi();

var userName = "userName_example"; // String | student' userName

var password = "password_example"; // String | student' password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsLoginPost(userName, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | **String**| student&#39; userName | 
 **password** | **String**| student&#39; password | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

<a name="studentsRegistePost"></a>
# **studentsRegistePost**
> InlineResponse200 studentsRegistePost(userName, password)

student registe



### Example
```javascript
var EducationManageApi = require('education_manage_api');

var apiInstance = new EducationManageApi.StudentsApi();

var userName = "userName_example"; // String | student' userName

var password = "password_example"; // String | student' password


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.studentsRegistePost(userName, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | **String**| student&#39; userName | 
 **password** | **String**| student&#39; password | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined

