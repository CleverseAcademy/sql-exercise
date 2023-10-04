import q from '../engines/q'
import Dto0 from '../schemas/sfw/district/0.dto'
import Dto1 from '../schemas/sfw/district/1.dto'
import Dto2 from '../schemas/sfw/district/2.dto'
import Dto3 from '../schemas/sfw/district/3.dto'
import Dto4 from '../schemas/sfw/district/4.dto'

export const q0 = q<Dto0>(
  `SELECT d_name, d_street_1, d_street_2, d_city, d_zip FROM district1 WHERE d_tax >= 0.2`,
)

export const q1 = q<Dto1>('')

export const q2 = q<Dto2>('')

export const q3 = q<Dto3>('')

export const q4 = q<Dto4>('')

export const q5 = q('')

export const q6 = q('')
