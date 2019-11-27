# coding: utf-8

"""
    QEDIT - Asset Transfers

    This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/).   # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: dev@qed-it.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class GetTasksRequest(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'start_index': 'int',
        'number_of_results': 'int',
        'types': 'list[TaskType]',
        'results': 'list[Result]',
        'order': 'OrderEnum'
    }

    attribute_map = {
        'start_index': 'start_index',
        'number_of_results': 'number_of_results',
        'types': 'types',
        'results': 'results',
        'order': 'order'
    }

    def __init__(self, start_index=None, number_of_results=None, types=None, results=None, order=None):  # noqa: E501
        """GetTasksRequest - a model defined in OpenAPI"""  # noqa: E501

        self._start_index = None
        self._number_of_results = None
        self._types = None
        self._results = None
        self._order = None
        self.discriminator = None

        self.start_index = start_index
        self.number_of_results = number_of_results
        if types is not None:
            self.types = types
        if results is not None:
            self.results = results
        if order is not None:
            self.order = order

    @property
    def start_index(self):
        """Gets the start_index of this GetTasksRequest.  # noqa: E501

        An offset used to paginate through the Task list; indexing is 0-based  # noqa: E501

        :return: The start_index of this GetTasksRequest.  # noqa: E501
        :rtype: int
        """
        return self._start_index

    @start_index.setter
    def start_index(self, start_index):
        """Sets the start_index of this GetTasksRequest.

        An offset used to paginate through the Task list; indexing is 0-based  # noqa: E501

        :param start_index: The start_index of this GetTasksRequest.  # noqa: E501
        :type: int
        """
        if start_index is None:
            raise ValueError("Invalid value for `start_index`, must not be `None`")  # noqa: E501

        self._start_index = start_index

    @property
    def number_of_results(self):
        """Gets the number_of_results of this GetTasksRequest.  # noqa: E501

        Maximal number of results to fetch in this call  # noqa: E501

        :return: The number_of_results of this GetTasksRequest.  # noqa: E501
        :rtype: int
        """
        return self._number_of_results

    @number_of_results.setter
    def number_of_results(self, number_of_results):
        """Sets the number_of_results of this GetTasksRequest.

        Maximal number of results to fetch in this call  # noqa: E501

        :param number_of_results: The number_of_results of this GetTasksRequest.  # noqa: E501
        :type: int
        """
        if number_of_results is None:
            raise ValueError("Invalid value for `number_of_results`, must not be `None`")  # noqa: E501

        self._number_of_results = number_of_results

    @property
    def types(self):
        """Gets the types of this GetTasksRequest.  # noqa: E501

        Types of Tasks to fetch; fetch all types if omitted  # noqa: E501

        :return: The types of this GetTasksRequest.  # noqa: E501
        :rtype: list[TaskType]
        """
        return self._types

    @types.setter
    def types(self, types):
        """Sets the types of this GetTasksRequest.

        Types of Tasks to fetch; fetch all types if omitted  # noqa: E501

        :param types: The types of this GetTasksRequest.  # noqa: E501
        :type: list[TaskType]
        """

        self._types = types

    @property
    def results(self):
        """Gets the results of this GetTasksRequest.  # noqa: E501

        List of results (statuses) to filter by; fetch in_progress tasks if omitted  # noqa: E501

        :return: The results of this GetTasksRequest.  # noqa: E501
        :rtype: list[Result]
        """
        return self._results

    @results.setter
    def results(self, results):
        """Sets the results of this GetTasksRequest.

        List of results (statuses) to filter by; fetch in_progress tasks if omitted  # noqa: E501

        :param results: The results of this GetTasksRequest.  # noqa: E501
        :type: list[Result]
        """

        self._results = results

    @property
    def order(self):
        """Gets the order of this GetTasksRequest.  # noqa: E501


        :return: The order of this GetTasksRequest.  # noqa: E501
        :rtype: OrderEnum
        """
        return self._order

    @order.setter
    def order(self, order):
        """Sets the order of this GetTasksRequest.


        :param order: The order of this GetTasksRequest.  # noqa: E501
        :type: OrderEnum
        """

        self._order = order

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, GetTasksRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
