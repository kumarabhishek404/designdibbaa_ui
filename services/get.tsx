import React from 'react';
import Axios from 'axios'

export const GetTextures = async () => {
  // try {
  //   const response: any = Axios.get({
  //     url: `http://localhost:5000`,
  //     method: "get",
  //   });
  //   return response;
  // } catch (error) {
  //   throw error;
  // }

}

// async getAllActivityTypes(): Promise<any> {
//   try {
//       const response: any = await this.callApi()({
//           url: `v1/leadsquared/retrieve/${this.credentials.providerId}/getAllActivityTypes`,
//           method: "get",
//           baseURL: `${this.getBaseUrl()}`,
//           headers: {
//               "x-lsq-accesskey": this.credentials.accessKey,
//               "x-lsq-secretkey": this.credentials.secretKey,
//               "x-lsq-connectorid": this.credentials.connectorID,
//               "x-lsq-orgid": this.credentials.orgID
//           }
//       });
//       return response.data;
//   } catch (error) {
//       throw error;
//   }
// }