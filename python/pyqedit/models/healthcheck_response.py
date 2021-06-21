# coding: utf-8

"""
    QEDIT - Asset Transfers

    This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/).   # noqa: E501

    OpenAPI spec version: 1.7.2
    Contact: dev@qed-it.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class HealthcheckResponse(object):
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
        'version': 'str',
        'blockchain_connector': 'HealthcheckResponseItem',
        'message_queue': 'HealthcheckResponseItem',
        'database': 'HealthcheckResponseItem',
        'passing': 'bool'
    }

    attribute_map = {
        'version': 'version',
        'blockchain_connector': 'blockchain_connector',
        'message_queue': 'message_queue',
        'database': 'database',
        'passing': 'passing'
    }

    def __init__(self, version=None, blockchain_connector=None, message_queue=None, database=None, passing=None):  # noqa: E501
        """HealthcheckResponse - a model defined in OpenAPI"""  # noqa: E501

        self._version = None
        self._blockchain_connector = None
        self._message_queue = None
        self._database = None
        self._passing = None
        self.discriminator = None

        if version is not None:
            self.version = version
        if blockchain_connector is not None:
            self.blockchain_connector = blockchain_connector
        if message_queue is not None:
            self.message_queue = message_queue
        if database is not None:
            self.database = database
        if passing is not None:
            self.passing = passing

    @property
    def version(self):
        """Gets the version of this HealthcheckResponse.  # noqa: E501

        API version of the Node  # noqa: E501

        :return: The version of this HealthcheckResponse.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this HealthcheckResponse.

        API version of the Node  # noqa: E501

        :param version: The version of this HealthcheckResponse.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def blockchain_connector(self):
        """Gets the blockchain_connector of this HealthcheckResponse.  # noqa: E501


        :return: The blockchain_connector of this HealthcheckResponse.  # noqa: E501
        :rtype: HealthcheckResponseItem
        """
        return self._blockchain_connector

    @blockchain_connector.setter
    def blockchain_connector(self, blockchain_connector):
        """Sets the blockchain_connector of this HealthcheckResponse.


        :param blockchain_connector: The blockchain_connector of this HealthcheckResponse.  # noqa: E501
        :type: HealthcheckResponseItem
        """

        self._blockchain_connector = blockchain_connector

    @property
    def message_queue(self):
        """Gets the message_queue of this HealthcheckResponse.  # noqa: E501


        :return: The message_queue of this HealthcheckResponse.  # noqa: E501
        :rtype: HealthcheckResponseItem
        """
        return self._message_queue

    @message_queue.setter
    def message_queue(self, message_queue):
        """Sets the message_queue of this HealthcheckResponse.


        :param message_queue: The message_queue of this HealthcheckResponse.  # noqa: E501
        :type: HealthcheckResponseItem
        """

        self._message_queue = message_queue

    @property
    def database(self):
        """Gets the database of this HealthcheckResponse.  # noqa: E501


        :return: The database of this HealthcheckResponse.  # noqa: E501
        :rtype: HealthcheckResponseItem
        """
        return self._database

    @database.setter
    def database(self, database):
        """Sets the database of this HealthcheckResponse.


        :param database: The database of this HealthcheckResponse.  # noqa: E501
        :type: HealthcheckResponseItem
        """

        self._database = database

    @property
    def passing(self):
        """Gets the passing of this HealthcheckResponse.  # noqa: E501

        Boolean signifying whether the endpoint is ready for calls  # noqa: E501

        :return: The passing of this HealthcheckResponse.  # noqa: E501
        :rtype: bool
        """
        return self._passing

    @passing.setter
    def passing(self, passing):
        """Sets the passing of this HealthcheckResponse.

        Boolean signifying whether the endpoint is ready for calls  # noqa: E501

        :param passing: The passing of this HealthcheckResponse.  # noqa: E501
        :type: bool
        """

        self._passing = passing

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
        if not isinstance(other, HealthcheckResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other