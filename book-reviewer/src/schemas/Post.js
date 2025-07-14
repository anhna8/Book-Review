import * as yup from 'yup'

export const postSchema = yup.object({
  title: yup
    .string()
    .required('El título es requerido')
    .max(100, 'El título no puede exceder 100 caracteres'),
  content: yup
    .string()
    .required('El contenido es requerido')
    .min(20, 'El contenido debe tener al menos 20 caracteres'),
  category: yup
    .string()
    .required('La categoría es requerida')
    .oneOf([
      'Ciencia Ficcion',
      'Fantasia',
      'Terror',
      'Romance',
      'Thriller',
      'Novela Histórica',
      'Aventuras',
      'Poesía',
      'Misterio',
      'Juvenil',
      'No Ficción',
      'Biografía'
    ], 'La categoría debe ser una opción válida'),
  author: yup
    .string()
    .required('El autor es requerido')
    .min(2, 'El nombre del autor debe tener al menos 2 caracteres'),
  publishDate: yup
    .date()
    .required('La fecha de publicación es requerida')
    .min(new Date(), 'La fecha debe ser posterior a hoy')
}).required()