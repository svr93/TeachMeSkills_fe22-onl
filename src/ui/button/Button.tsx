import styles from "./Button.module.css"
type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
	role?:string;
}

export const Button:React.FC<ButtonProps> = ({children, className='', onClick, role})=>{
	
	return(
	<button type="button" className={`${styles.button} ${className}`} onClick={onClick} role={role}>{children}</button>
)
}