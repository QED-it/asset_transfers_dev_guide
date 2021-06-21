# coding: utf-8

"""
    QEDIT - Asset Transfers

    This SDK provides a programmatic way for interacting with QEDIT's _Asset Transfer_ API. The specification definition file is publicly available [in this repository](https://github.com/QED-it/asset_transfers_dev_guide/).   # noqa: E501

    OpenAPI spec version: 1.7.2
    Contact: dev@qed-it.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import pyqedit
from pyqedit.api.attachment_api import AttachmentApi  # noqa: E501
from pyqedit.rest import ApiException


class TestAttachmentApi(unittest.TestCase):
    """AttachmentApi unit test stubs"""

    def setUp(self):
        self.api = pyqedit.api.attachment_api.AttachmentApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_attachment_add_to_group_post(self):
        """Test case for attachment_add_to_group_post

        Add a new member to a group  # noqa: E501
        """
        pass

    def test_attachment_create_group_post(self):
        """Test case for attachment_create_group_post

        Create a new group  # noqa: E501
        """
        pass

    def test_attachment_download_post(self):
        """Test case for attachment_download_post

        Download an Attachment  # noqa: E501
        """
        pass

    def test_attachment_get_groups_post(self):
        """Test case for attachment_get_groups_post

        List the Groups the Wallet has access to  # noqa: E501
        """
        pass

    def test_attachment_leave_group_post(self):
        """Test case for attachment_leave_group_post

        Removes an owned Wallet from a Group  # noqa: E501
        """
        pass

    def test_attachment_list_post(self):
        """Test case for attachment_list_post

        Lists available Attachments  # noqa: E501
        """
        pass

    def test_attachment_upload_post(self):
        """Test case for attachment_upload_post

        Upload an Attachment and share it with a Group  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()