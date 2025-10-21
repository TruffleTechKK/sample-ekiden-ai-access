import type { Model } from './models';
import type { TextStreamPart, ToolSet } from 'ai';

// export interface MessageAIResponseSafetyRating {
//   category:
//     | 'HARM_CATEGORY_HATE_SPEECH'
//     | 'HARM_CATEGORY_DANGEROUS_CONTENT'
//     | 'HARM_CATEGORY_HARASSMENT'
//     | 'HARM_CATEGORY_SEXUALLY_EXPLICIT'
//     | 'HARM_CATEGORY_UNSPECIFIED';
//   probability: 'HARM_PROBABILITY_UNSPECIFIED' | 'MEDIUM' | 'NEGLIGIBLE' | 'LOW' | 'HIGH';
//   probabilityScore: number;
//   severity:
//     | 'HARM_SEVERITY_UNSPECIFIED'
//     | 'HARM_SEVERITY_NEGLIGIBLE'
//     | 'HARM_SEVERITY_LOW'
//     | 'HARM_SEVERITY_MEDIUM'
//     | 'HARM_SEVERITY_HIGH';
//   severityScore: number;
// }
// export interface MessageAIResponseCandidate {
//   finishReason:
//     | 'SAFETY'
//     | 'STOP'
//     | 'MAX_TOKENS'
//     | 'RECITATION'
//     | 'SPII'
//     | 'PROHIBITED_CONTENT'
//     | 'FINISH_REASON_UNSPECIFIED'
//     | 'OTHER';
//   safetyRatings: MessageAIResponseSafetyRating[];
//   index: number;
//   content: {
//     parts: {
//       text: string;
//     };
//   }[];
// }
export interface MessageAIResponseCommon {
  data: TextStreamPart<ToolSet>;
}

export interface MessageAIResponse extends MessageAIResponseCommon, Model {}
