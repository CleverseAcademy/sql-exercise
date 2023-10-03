import q from '../engines/q'
import Dto0 from '../schemas/sfw/district/0.dto'
import Dto1 from '../schemas/sfw/district/1.dto'

export const q0 = q<Dto0>(
  `SELECT dt.d_name, dt.d_street_1, dt.d_street_2, dt.d_city, dt.d_zip FROM district1 dt WHERE dt.d_tax >= 0.2`,
)

export const q1 = q<Dto1>('')
