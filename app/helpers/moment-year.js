import { helper } from '@ember/component/helper';
import moment from 'moment';

export function momentYear() {
  return moment().format('YYYY')
}

export default helper(momentYear);
