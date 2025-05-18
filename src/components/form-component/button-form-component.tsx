'use client';

// import { Fragment } from 'react';
// import { Send } from 'lucide-react';

// export default function FormBTN() {
//   return (
//     <Fragment>
//       <button
//         type="submit"
//         className="bg-scout-azul text-scout-verde hover:sm:bg-scout-azul hover:sm:cursor-pointer sm:bg-scout-verde py-3 px-6 sm:text-scout-azul hover:sm:text-scout-verde duration-150 transition-normal"
//       >
//         <span className="text-semibold">
//           Enviar Pré-Inscrição
//           <span>
//             <Send />
//           </span>
//         </span>
//       </button>
//     </Fragment>
//   );
// }

interface FormBTNProps {
  isSubmitting?: boolean;
}

export default function FormBTN({ isSubmitting = false }: FormBTNProps) {
  return (
    <button
      type="submit"
      className="flex items-center justify-center bg-scout-azul hover:bg-scout-verde hover:text-scout-azul text-scout-verde py-3 px-6  font-medium transition duration-300 ease-in-out"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Enviando...
        </>
      ) : (
        <>Submeter Pré-Inscrição</>
      )}
    </button>
  );
}
