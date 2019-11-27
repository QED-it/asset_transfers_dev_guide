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


class GetSyncStatusResponse(object):
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
        'in_sync': 'bool',
        'blockchain_block_height': 'int',
        'last_processed_block_height': 'int'
    }

    attribute_map = {
        'in_sync': 'in_sync',
        'blockchain_block_height': 'blockchain_block_height',
        'last_processed_block_height': 'last_processed_block_height'
    }

    def __init__(self, in_sync=None, blockchain_block_height=None, last_processed_block_height=None):  # noqa: E501
        """GetSyncStatusResponse - a model defined in OpenAPI"""  # noqa: E501

        self._in_sync = None
        self._blockchain_block_height = None
        self._last_processed_block_height = None
        self.discriminator = None

        if in_sync is not None:
            self.in_sync = in_sync
        if blockchain_block_height is not None:
            self.blockchain_block_height = blockchain_block_height
        if last_processed_block_height is not None:
            self.last_processed_block_height = last_processed_block_height

    @property
    def in_sync(self):
        """Gets the in_sync of this GetSyncStatusResponse.  # noqa: E501

        Boolean signifying whether the QEDIT Node is in sync with the Blockchain; false if the Node is not synced; sync is defined as having less than a preconfigured difference between the current Blockchain height and the last block processed by the Node; the allowed difference defaults to 5, but can be configured when setting up the Node  # noqa: E501

        :return: The in_sync of this GetSyncStatusResponse.  # noqa: E501
        :rtype: bool
        """
        return self._in_sync

    @in_sync.setter
    def in_sync(self, in_sync):
        """Sets the in_sync of this GetSyncStatusResponse.

        Boolean signifying whether the QEDIT Node is in sync with the Blockchain; false if the Node is not synced; sync is defined as having less than a preconfigured difference between the current Blockchain height and the last block processed by the Node; the allowed difference defaults to 5, but can be configured when setting up the Node  # noqa: E501

        :param in_sync: The in_sync of this GetSyncStatusResponse.  # noqa: E501
        :type: bool
        """

        self._in_sync = in_sync

    @property
    def blockchain_block_height(self):
        """Gets the blockchain_block_height of this GetSyncStatusResponse.  # noqa: E501

        The current block height of the Blockchain  # noqa: E501

        :return: The blockchain_block_height of this GetSyncStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._blockchain_block_height

    @blockchain_block_height.setter
    def blockchain_block_height(self, blockchain_block_height):
        """Sets the blockchain_block_height of this GetSyncStatusResponse.

        The current block height of the Blockchain  # noqa: E501

        :param blockchain_block_height: The blockchain_block_height of this GetSyncStatusResponse.  # noqa: E501
        :type: int
        """

        self._blockchain_block_height = blockchain_block_height

    @property
    def last_processed_block_height(self):
        """Gets the last_processed_block_height of this GetSyncStatusResponse.  # noqa: E501

        The height of the last block that was processed in the Node  # noqa: E501

        :return: The last_processed_block_height of this GetSyncStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._last_processed_block_height

    @last_processed_block_height.setter
    def last_processed_block_height(self, last_processed_block_height):
        """Sets the last_processed_block_height of this GetSyncStatusResponse.

        The height of the last block that was processed in the Node  # noqa: E501

        :param last_processed_block_height: The last_processed_block_height of this GetSyncStatusResponse.  # noqa: E501
        :type: int
        """

        self._last_processed_block_height = last_processed_block_height

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
        if not isinstance(other, GetSyncStatusResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
