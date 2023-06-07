import styles from './input.module.css'

export const Display = ({
    label
}: FormInput & InputParams) => (
    <>
        <div className={styles.field} style={{
            gridTemplateColumns: '1fr',
        }}>
            {label.split('\n').map((paragraph: string, index: number) =>
                <p key={index} className={styles.displayText}>{paragraph}</p>
            )}
        </div>
    </>
)