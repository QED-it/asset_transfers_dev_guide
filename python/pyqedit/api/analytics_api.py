# coding: utf-8

"""
    QEDIT - Asset Transfers

    This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/).   # noqa: E501

    OpenAPI spec version: 1.7.2
    Contact: dev@qed-it.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from pyqedit.api_client import ApiClient


class AnalyticsApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def analytics_get_network_activity_post(self, get_network_activity_request, **kwargs):  # noqa: E501
        """Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions  # noqa: E501

        List all verified Transactions from the network, even ones that do not have anything to do with any Wallet stored in the Node; For each such Transaction all of public information is returned in a structured format; However, no private information is returned even if some private information is known.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.analytics_get_network_activity_post(get_network_activity_request, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param GetNetworkActivityRequest get_network_activity_request: (required)
        :return: GetNetworkActivityResponse
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.analytics_get_network_activity_post_with_http_info(get_network_activity_request, **kwargs)  # noqa: E501
        else:
            (data) = self.analytics_get_network_activity_post_with_http_info(get_network_activity_request, **kwargs)  # noqa: E501
            return data

    def analytics_get_network_activity_post_with_http_info(self, get_network_activity_request, **kwargs):  # noqa: E501
        """Get details on past blocks either by order using start_index and number_of_results or by the tx_hashes of the transactions  # noqa: E501

        List all verified Transactions from the network, even ones that do not have anything to do with any Wallet stored in the Node; For each such Transaction all of public information is returned in a structured format; However, no private information is returned even if some private information is known.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.analytics_get_network_activity_post_with_http_info(get_network_activity_request, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param GetNetworkActivityRequest get_network_activity_request: (required)
        :return: GetNetworkActivityResponse
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = ['get_network_activity_request']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method analytics_get_network_activity_post" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']
        # verify the required parameter 'get_network_activity_request' is set
        if ('get_network_activity_request' not in local_var_params or
                local_var_params['get_network_activity_request'] is None):
            raise ValueError("Missing the required parameter `get_network_activity_request` when calling `analytics_get_network_activity_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'get_network_activity_request' in local_var_params:
            body_params = local_var_params['get_network_activity_request']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth']  # noqa: E501

        return self.api_client.call_api(
            '/analytics/get_network_activity', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='GetNetworkActivityResponse',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)

    def analytics_get_sync_status_post(self, **kwargs):  # noqa: E501
        """Get blockchain sync status information  # noqa: E501

        Returns detailed information about the status of the sync between the QEDIT Node and the underlying Blockchain  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.analytics_get_sync_status_post(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: GetSyncStatusResponse
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.analytics_get_sync_status_post_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.analytics_get_sync_status_post_with_http_info(**kwargs)  # noqa: E501
            return data

    def analytics_get_sync_status_post_with_http_info(self, **kwargs):  # noqa: E501
        """Get blockchain sync status information  # noqa: E501

        Returns detailed information about the status of the sync between the QEDIT Node and the underlying Blockchain  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.analytics_get_sync_status_post_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :return: GetSyncStatusResponse
                 If the method is called asynchronously,
                 returns the request thread.
        """

        local_var_params = locals()

        all_params = []  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        for key, val in six.iteritems(local_var_params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method analytics_get_sync_status_post" % key
                )
            local_var_params[key] = val
        del local_var_params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['ApiKeyAuth']  # noqa: E501

        return self.api_client.call_api(
            '/analytics/get_sync_status', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='GetSyncStatusResponse',  # noqa: E501
            auth_settings=auth_settings,
            async_req=local_var_params.get('async_req'),
            _return_http_data_only=local_var_params.get('_return_http_data_only'),  # noqa: E501
            _preload_content=local_var_params.get('_preload_content', True),
            _request_timeout=local_var_params.get('_request_timeout'),
            collection_formats=collection_formats)
