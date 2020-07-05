import { Result } from './result';

export class ResultSummary {
  studentId: number;
  classGrade: string = "";
  section: string = "";
  year: number; 
  semester: string = "";
  totalObtainedMarks: number; 
  totalMarks: number;
  totalAverageMarks: number;
  results: Array<Result>;
}