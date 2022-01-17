import { styles } from 'config/styles'

const ChakraIcon = (props, { color = styles.hightAccent }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0C5.352 0 0 5.352 0 12C0 18.648 5.352 24 12 24C18.648 24 24 18.648 24 12C24 5.352 18.648 0 12 0ZM14.8 4.333C14.93 4.329 15.048 4.469 14.971 4.611L11.927 10.191C11.9116 10.2195 11.9039 10.2514 11.9045 10.2838C11.9051 10.3161 11.9142 10.3477 11.9307 10.3755C11.9472 10.4033 11.9707 10.4264 11.9988 10.4424C12.0269 10.4584 12.0587 10.4669 12.091 10.467H17.351C17.521 10.467 17.603 10.674 17.479 10.79L8.259 19.395C8.094 19.549 7.849 19.332 7.981 19.149L12.345 13.128C12.365 13.1001 12.3769 13.0673 12.3795 13.0331C12.3821 12.9988 12.3752 12.9646 12.3596 12.934C12.344 12.9035 12.3203 12.8778 12.2911 12.8598C12.2619 12.8418 12.2283 12.8322 12.194 12.832H6.627C6.58996 12.8319 6.55378 12.8208 6.52305 12.8001C6.49232 12.7795 6.46843 12.7501 6.45439 12.7158C6.44036 12.6816 6.43682 12.6439 6.44423 12.6076C6.45164 12.5713 6.46966 12.538 6.496 12.512L14.676 4.389C14.7088 4.35477 14.7536 4.33468 14.801 4.333H14.8Z"
        fill={color}
      />
    </svg>
  )
}

export default ChakraIcon
