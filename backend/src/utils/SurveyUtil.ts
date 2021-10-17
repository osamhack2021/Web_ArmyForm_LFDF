import Survey from '../models/SurveyModel';

class SurveyUtil {
  public static async create(surveyFullString: string): Promise<any> {
    const surveyStrings = surveyFullString.split(' ');
    const survey = await Survey.create({
      name: surveyStrings[0],
      json: surveyStrings[1],
      ownerId: surveyStrings[2],
      unitId: surveyStrings[3]
    })
    return survey;
  }
}

export default SurveyUtil;