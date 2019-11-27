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


class AnalyticRuleWalletTx(object):
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
        'signed_by_self': 'bool',
        'rule_affect_self': 'bool',
        'tx_signer': 'str',
        'rule': 'AnalyticsRuleWalletDefinition'
    }

    attribute_map = {
        'signed_by_self': 'signed_by_self',
        'rule_affect_self': 'rule_affect_self',
        'tx_signer': 'tx_signer',
        'rule': 'rule'
    }

    def __init__(self, signed_by_self=None, rule_affect_self=None, tx_signer=None, rule=None):  # noqa: E501
        """AnalyticRuleWalletTx - a model defined in OpenAPI"""  # noqa: E501

        self._signed_by_self = None
        self._rule_affect_self = None
        self._tx_signer = None
        self._rule = None
        self.discriminator = None

        if signed_by_self is not None:
            self.signed_by_self = signed_by_self
        if rule_affect_self is not None:
            self.rule_affect_self = rule_affect_self
        if tx_signer is not None:
            self.tx_signer = tx_signer
        if rule is not None:
            self.rule = rule

    @property
    def signed_by_self(self):
        """Gets the signed_by_self of this AnalyticRuleWalletTx.  # noqa: E501

        Boolean signifying whether the Rule was created by the Wallet in question  # noqa: E501

        :return: The signed_by_self of this AnalyticRuleWalletTx.  # noqa: E501
        :rtype: bool
        """
        return self._signed_by_self

    @signed_by_self.setter
    def signed_by_self(self, signed_by_self):
        """Sets the signed_by_self of this AnalyticRuleWalletTx.

        Boolean signifying whether the Rule was created by the Wallet in question  # noqa: E501

        :param signed_by_self: The signed_by_self of this AnalyticRuleWalletTx.  # noqa: E501
        :type: bool
        """

        self._signed_by_self = signed_by_self

    @property
    def rule_affect_self(self):
        """Gets the rule_affect_self of this AnalyticRuleWalletTx.  # noqa: E501

        Boolean signifying whether the Rule granted permissions to the Wallet in question  # noqa: E501

        :return: The rule_affect_self of this AnalyticRuleWalletTx.  # noqa: E501
        :rtype: bool
        """
        return self._rule_affect_self

    @rule_affect_self.setter
    def rule_affect_self(self, rule_affect_self):
        """Sets the rule_affect_self of this AnalyticRuleWalletTx.

        Boolean signifying whether the Rule granted permissions to the Wallet in question  # noqa: E501

        :param rule_affect_self: The rule_affect_self of this AnalyticRuleWalletTx.  # noqa: E501
        :type: bool
        """

        self._rule_affect_self = rule_affect_self

    @property
    def tx_signer(self):
        """Gets the tx_signer of this AnalyticRuleWalletTx.  # noqa: E501

        The public key of the Wallet that was used to create the Rule  # noqa: E501

        :return: The tx_signer of this AnalyticRuleWalletTx.  # noqa: E501
        :rtype: str
        """
        return self._tx_signer

    @tx_signer.setter
    def tx_signer(self, tx_signer):
        """Sets the tx_signer of this AnalyticRuleWalletTx.

        The public key of the Wallet that was used to create the Rule  # noqa: E501

        :param tx_signer: The tx_signer of this AnalyticRuleWalletTx.  # noqa: E501
        :type: str
        """

        self._tx_signer = tx_signer

    @property
    def rule(self):
        """Gets the rule of this AnalyticRuleWalletTx.  # noqa: E501


        :return: The rule of this AnalyticRuleWalletTx.  # noqa: E501
        :rtype: AnalyticsRuleWalletDefinition
        """
        return self._rule

    @rule.setter
    def rule(self, rule):
        """Sets the rule of this AnalyticRuleWalletTx.


        :param rule: The rule of this AnalyticRuleWalletTx.  # noqa: E501
        :type: AnalyticsRuleWalletDefinition
        """

        self._rule = rule

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
        if not isinstance(other, AnalyticRuleWalletTx):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
