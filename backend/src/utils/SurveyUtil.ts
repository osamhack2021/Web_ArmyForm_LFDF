import Survey from '../models/SurveyModel';

class SurveyUtil {
  public static async create(surveyFullString: string): Promise<any> {
    const startdate = '2021-10-18 00:00:00'
    const enddate = '2021-10-19 00:00:00'
    const surveyStrings = surveyFullString.split(' ');
    const survey = await Survey.create({
      name: surveyStrings[0],
      json: surveyStrings[1],
      ownerId: surveyStrings[2],
      unitId: surveyStrings[3],
      startTime: startdate,
      endTime: enddate
    })
    return survey;
  }
}

export default SurveyUtil;