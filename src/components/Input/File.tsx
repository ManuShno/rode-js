import styles from './input.module.css'

export const File = ({
    id,
    label,
    placeholder,
    handleUpload,
    errors,
    editable,
}: FormInput & InputParams) => {
    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input id={id}
                name={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='file'
                onChange={handleUpload} 
                placeholder={placeholder} 
                readOnly={!editable}
                autoComplete='on'/>
        </>
    )
}