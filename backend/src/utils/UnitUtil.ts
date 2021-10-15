import { Op } from 'sequelize';
import Unit from '../models/UnitModel';

class UnitUtil {
  public static async checkUnit (unitFullString: string): Promise<Unit | null> {
    const unitStrings = unitFullString.split(' ');
    var unit = await Unit.findOne({ where: { name: unitStrings[0] } });
    for (var i = 1; i < unitStrings.length; i++) {
      if (unit === null) {
        return null;
      }
      unit = await Unit.findOne({ where: { [Op.and]: [ { name: unitStrings[i] }, { superUnitId: unit.id } ] } });
    }
    return unit;
  }

  public static async createUnits (unitFullString: string): Promise<Unit | null> {
    const unitStrings = unitFullString.split(' ');
    var [unit, _] = await Unit.findOrCreate({
      where: { name: unitStrings[0] },
      defaults: {
        superUnitId: null
      }
    });
    for (var i = 1; i < unitStrings.length; i++) {
      if (unit === null) {
        return null;
      }
      [unit, _] = await Unit.findOrCreate({ where: { [Op.and]: [ { name: unitStrings[i] }, { superUnitId: unit.id } ] } });
    }
    return unit;
  }
}

export default UnitUtil;
