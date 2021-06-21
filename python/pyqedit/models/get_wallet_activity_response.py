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


class GetWalletActivityResponse(object):
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
        'wallet_id': 'str',
        'transactions': 'list[AnalyticWalletTx]'
    }

    attribute_map = {
        'wallet_id': 'wallet_id',
        'transactions': 'transactions'
    }

    def __init__(self, wallet_id=None, transactions=None):  # noqa: E501
        """GetWalletActivityResponse - a model defined in OpenAPI"""  # noqa: E501

        self._wallet_id = None
        self._transactions = None
        self.discriminator = None

        if wallet_id is not None:
            self.wallet_id = wallet_id
        if transactions is not None:
            self.transactions = transactions

    @property
    def wallet_id(self):
        """Gets the wallet_id of this GetWalletActivityResponse.  # noqa: E501


        :return: The wallet_id of this GetWalletActivityResponse.  # noqa: E501
        :rtype: str
        """
        return self._wallet_id

    @wallet_id.setter
    def wallet_id(self, wallet_id):
        """Sets the wallet_id of this GetWalletActivityResponse.


        :param wallet_id: The wallet_id of this GetWalletActivityResponse.  # noqa: E501
        :type: str
        """

        self._wallet_id = wallet_id

    @property
    def transactions(self):
        """Gets the transactions of this GetWalletActivityResponse.  # noqa: E501

        The list of retrieved transactions  # noqa: E501

        :return: The transactions of this GetWalletActivityResponse.  # noqa: E501
        :rtype: list[AnalyticWalletTx]
        """
        return self._transactions

    @transactions.setter
    def transactions(self, transactions):
        """Sets the transactions of this GetWalletActivityResponse.

        The list of retrieved transactions  # noqa: E501

        :param transactions: The transactions of this GetWalletActivityResponse.  # noqa: E501
        :type: list[AnalyticWalletTx]
        """

        self._transactions = transactions

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
        if not isinstance(other, GetWalletActivityResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other