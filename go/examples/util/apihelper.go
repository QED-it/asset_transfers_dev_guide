package util

import (
	"github.com/QED-it/asset_transfers_dev_guide/go/sdk"
)

// ErrorResponseString will return OpenAPI's model error (the original error, not the
// one that's wrapped by OpenAPI)
func ErrorResponseString(err error) string {
	if apiError, ok := err.(sdk.GenericOpenAPIError).Model().(sdk.ErrorResponse); ok {
		return apiError.Message
	}
	return err.Error()
}
