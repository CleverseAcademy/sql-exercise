import q from '../engines/q'
import FirstQueryDto from '../schemas/sfw/1.dto'

export const districtQuery = q<FirstQueryDto>(
  `SELECT dt.d_name, dt.d_street_1, dt.d_street_2, dt.d_city, dt.d_zip FROM district1 dt WHERE dt.d_tax >= 0.2;`,
)
