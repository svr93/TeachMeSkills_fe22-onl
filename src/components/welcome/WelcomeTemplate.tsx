
import styles from "./WelcomeTemplate.module.css"

type WelcomeTemplateProps ={
	title: React.ReactNode;
   children: React.ReactNode;
	button: React.ReactNode;
	description?: React.ReactNode;
}
export const WelcomeTemplate:React.FC<WelcomeTemplateProps> = ({title, children, button, description}) =>{
	return(
		<div className={styles.container}>
			{title}
			{children}
			{button}
			{description}
	</div>
	)
}