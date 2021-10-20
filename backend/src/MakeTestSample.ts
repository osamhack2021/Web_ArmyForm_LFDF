import User from './models/UserModel';
import SurveyUtil from './utils/SurveyUtil';
import bcrypt from 'bcrypt';
import UnitUtil from './utils/UnitUtil';
import Unit from './models/UnitModel';

class MakeTestSample {
  public static async TestSet1(): Promise<any> {
    const unit = await UnitUtil.createUnits('국군지휘통신사령부 사이버네트워크작전센터 네트워크작전대');
    if (unit === null) {
      return unit;
    }
    const user = await User.create({
      username: 'tshong3',
      password: await bcrypt.hash('test1234', 10),
      name: '홍태성',
      armyType: '공군',
      armyUnitId: unit.id,
      armyRank: '상병',
      serialNumber: '21-70001688'
    });
    if (user === null) {
      return user;
    }
    SurveyUtil.create('홍태성이만든설문조사 히히 ' + user.id + ' ' + user.armyUnitId);
    return console.log("Made Test Set 1");
  }

  public static async TestSet2(): Promise<any> {
    const unit = await UnitUtil.createUnits('국군의무사령부 테스트를 하기위함');
    if (unit === null) {
      return unit;
    }
    const user = await User.create({
      username: 'ironore15',
      password: await bcrypt.hash('test1234', 10),
      name: '민승기',
      armyType: '육군',
      armyUnitId: unit.id,
      armyRank: '일병',
      serialNumber: '21-76005496'
    });
    if (user === null) {
      return user;
    }
    return SurveyUtil.create('민승기가만든설문조사 히히 ' + user.id + ' ' + user.armyUnitId);
  }
  public static async TestSet3(): Promise<any> {
    const unit = await Unit.findOne({
      attributes: ['id'],
      where: {
        name: "네트워크작전대"
      }
    });
    if (unit === null) {
      return unit;
    }
    const user = await User.create({
      username: 'test1234',
      password: await bcrypt.hash('test1234', 10),
      name: 'test',
      armyType: '해군',
      armyUnitId: unit.id,
      armyRank: '일병',
      serialNumber: '21-12341234'
    });
    if (user === null) {
      return user;
    }
    return SurveyUtil.create('test가만든설문조사 히히 ' + user.id + ' ' + user.armyUnitId);
  }
};

export default MakeTestSample;