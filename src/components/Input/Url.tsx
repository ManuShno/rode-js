import styles from './input.module.css'

export const Url = ({
    id,
    label,
    placeholder,
    default_value,
    handleChange,
    value,
    errors,
    editable,
}: FormInput & InputParams) => {
    return (
        <>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input value={value || ''} 
                id={id}
                className={`${styles.field}${errors && errors.length > 0 ? ` ${styles.error}`: ''}`}
                type='url'
                onChange={handleChange} 
                placeholder={placeholder} 
                readOnly={!editable}
                pattern='https://.*'
                autoComplete='on'/>
        </>
    )
}