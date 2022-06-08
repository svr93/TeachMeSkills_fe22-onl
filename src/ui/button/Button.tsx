import styles from "./Button.module.css"
type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
	role?:string;
	id?: string | number;
}

export const Button:React.FC<ButtonProps> = ({children, className='', onClick, role, id})=>{
	
	return(
	<button type="button" className={`${styles.button} ${className}`} onClick={onClick} role={role} id={`${id}`}>{children}</button>
)
}