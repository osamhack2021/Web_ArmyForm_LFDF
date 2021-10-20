import User from "../models/UserModel";

class UserUtil {
  public static checkPrivilege (user: User): number {
    /* const privilege = {
      '이병': 3, '일병': 3, '상병': 3, '병장': 3,
      '하사': 2, '중사': 2, '상사': 2, '원사': 2,
      '준위': 1, '소위': 1, '중위': 1, '대위': 1, '소령': 1, '중령': 1, '대령': 1, '준장': 1, '소장': 1, '중장': 1, '대장': 1,
      '관리자': 0
    };
    const level = privilege[user.armyRank];
    return level;
    */
    return 0;
  }
}

export default UserUtil;
