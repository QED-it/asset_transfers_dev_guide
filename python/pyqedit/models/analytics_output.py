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


class AnalyticsOutput(object):
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
        'is_confidential': 'bool',
        'public_issuance_description': 'AnalyticsPublicIssuanceDescription',
        'confidential_issuance_description': 'AnalyticsConfidentialIssuanceDescription',
        'output_description': 'AnalyticsOutputDescription'
    }

    attribute_map = {
        'is_confidential': 'is_confidential',
        'public_issuance_description': 'public_issuance_description',
        'confidential_issuance_description': 'confidential_issuance_description',
        'output_description': 'output_description'
    }

    def __init__(self, is_confidential=None, public_issuance_description=None, confidential_issuance_description=None, output_description=None):  # noqa: E501
        """AnalyticsOutput - a model defined in OpenAPI"""  # noqa: E501

        self._is_confidential = None
        self._public_issuance_description = None
        self._confidential_issuance_description = None
        self._output_description = None
        self.discriminator = None

        if is_confidential is not None:
            self.is_confidential = is_confidential
        if public_issuance_description is not None:
            self.public_issuance_description = public_issuance_description
        if confidential_issuance_description is not None:
            self.confidential_issuance_description = confidential_issuance_description
        if output_description is not None:
            self.output_description = output_description

    @property
    def is_confidential(self):
        """Gets the is_confidential of this AnalyticsOutput.  # noqa: E501

        Boolean signifying whether the Issuance was done confidentially; false if the Issuance was done publicly  # noqa: E501

        :return: The is_confidential of this AnalyticsOutput.  # noqa: E501
        :rtype: bool
        """
        return self._is_confidential

    @is_confidential.setter
    def is_confidential(self, is_confidential):
        """Sets the is_confidential of this AnalyticsOutput.

        Boolean signifying whether the Issuance was done confidentially; false if the Issuance was done publicly  # noqa: E501

        :param is_confidential: The is_confidential of this AnalyticsOutput.  # noqa: E501
        :type: bool
        """

        self._is_confidential = is_confidential

    @property
    def public_issuance_description(self):
        """Gets the public_issuance_description of this AnalyticsOutput.  # noqa: E501


        :return: The public_issuance_description of this AnalyticsOutput.  # noqa: E501
        :rtype: AnalyticsPublicIssuanceDescription
        """
        return self._public_issuance_description

    @public_issuance_description.setter
    def public_issuance_description(self, public_issuance_description):
        """Sets the public_issuance_description of this AnalyticsOutput.


        :param public_issuance_description: The public_issuance_description of this AnalyticsOutput.  # noqa: E501
        :type: AnalyticsPublicIssuanceDescription
        """

        self._public_issuance_description = public_issuance_description

    @property
    def confidential_issuance_description(self):
        """Gets the confidential_issuance_description of this AnalyticsOutput.  # noqa: E501


        :return: The confidential_issuance_description of this AnalyticsOutput.  # noqa: E501
        :rtype: AnalyticsConfidentialIssuanceDescription
        """
        return self._confidential_issuance_description

    @confidential_issuance_description.setter
    def confidential_issuance_description(self, confidential_issuance_description):
        """Sets the confidential_issuance_description of this AnalyticsOutput.


        :param confidential_issuance_description: The confidential_issuance_description of this AnalyticsOutput.  # noqa: E501
        :type: AnalyticsConfidentialIssuanceDescription
        """

        self._confidential_issuance_description = confidential_issuance_description

    @property
    def output_description(self):
        """Gets the output_description of this AnalyticsOutput.  # noqa: E501


        :return: The output_description of this AnalyticsOutput.  # noqa: E501
        :rtype: AnalyticsOutputDescription
        """
        return self._output_description

    @output_description.setter
    def output_description(self, output_description):
        """Sets the output_description of this AnalyticsOutput.


        :param output_description: The output_description of this AnalyticsOutput.  # noqa: E501
        :type: AnalyticsOutputDescription
        """

        self._output_description = output_description

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
        if not isinstance(other, AnalyticsOutput):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
