/* tslint:disable */
export interface AssesmentRequestDTO {
  assesmentTypeId?: number;
  name?: string;
  programId?: number;
  teacherId?: number;
  classId?: Array<number>;
  subjectId?: number;
  givenDate?: string;
  submittedDate?: string;
  weight?: number;
}
