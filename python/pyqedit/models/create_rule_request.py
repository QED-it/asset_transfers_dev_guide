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


class CreateRuleRequest(object):
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
        'authorization': 'str',
        'rules_to_add': 'list[Rule]'
    }

    attribute_map = {
        'wallet_id': 'wallet_id',
        'authorization': 'authorization',
        'rules_to_add': 'rules_to_add'
    }

    def __init__(self, wallet_id=None, authorization=None, rules_to_add=None):  # noqa: E501
        """CreateRuleRequest - a model defined in OpenAPI"""  # noqa: E501

        self._wallet_id = None
        self._authorization = None
        self._rules_to_add = None
        self.discriminator = None

        self.wallet_id = wallet_id
        self.authorization = authorization
        self.rules_to_add = rules_to_add

    @property
    def wallet_id(self):
        """Gets the wallet_id of this CreateRuleRequest.  # noqa: E501

        The ID of the Wallet whose admin credentials should be used to create the new Rules  # noqa: E501

        :return: The wallet_id of this CreateRuleRequest.  # noqa: E501
        :rtype: str
        """
        return self._wallet_id

    @wallet_id.setter
    def wallet_id(self, wallet_id):
        """Sets the wallet_id of this CreateRuleRequest.

        The ID of the Wallet whose admin credentials should be used to create the new Rules  # noqa: E501

        :param wallet_id: The wallet_id of this CreateRuleRequest.  # noqa: E501
        :type: str
        """
        if wallet_id is None:
            raise ValueError("Invalid value for `wallet_id`, must not be `None`")  # noqa: E501

        self._wallet_id = wallet_id

    @property
    def authorization(self):
        """Gets the authorization of this CreateRuleRequest.  # noqa: E501

        The authorization password for the Wallet whose admin credentials should be used to create the new Rules  # noqa: E501

        :return: The authorization of this CreateRuleRequest.  # noqa: E501
        :rtype: str
        """
        return self._authorization

    @authorization.setter
    def authorization(self, authorization):
        """Sets the authorization of this CreateRuleRequest.

        The authorization password for the Wallet whose admin credentials should be used to create the new Rules  # noqa: E501

        :param authorization: The authorization of this CreateRuleRequest.  # noqa: E501
        :type: str
        """
        if authorization is None:
            raise ValueError("Invalid value for `authorization`, must not be `None`")  # noqa: E501

        self._authorization = authorization

    @property
    def rules_to_add(self):
        """Gets the rules_to_add of this CreateRuleRequest.  # noqa: E501

        The list of Rules to add to the network  # noqa: E501

        :return: The rules_to_add of this CreateRuleRequest.  # noqa: E501
        :rtype: list[Rule]
        """
        return self._rules_to_add

    @rules_to_add.setter
    def rules_to_add(self, rules_to_add):
        """Sets the rules_to_add of this CreateRuleRequest.

        The list of Rules to add to the network  # noqa: E501

        :param rules_to_add: The rules_to_add of this CreateRuleRequest.  # noqa: E501
        :type: list[Rule]
        """
        if rules_to_add is None:
            raise ValueError("Invalid value for `rules_to_add`, must not be `None`")  # noqa: E501

        self._rules_to_add = rules_to_add

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
        if not isinstance(other, CreateRuleRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other