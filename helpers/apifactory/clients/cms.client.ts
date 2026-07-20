import { APIRequestContext, APIResponse } from "@playwright/test";
import { CmsEndpoints } from "helpers/datafactory/constants/paths.data";

export class CmsClient {
	constructor(private readonly request: APIRequestContext) {}

	mentors(): Promise<APIResponse> {
		return this.request.get(CmsEndpoints.MENTORSHIP_MENTORS);
	}
}
