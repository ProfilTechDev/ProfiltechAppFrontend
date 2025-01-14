export function useFormValidation() {
    const checkVadility = (e) => {
        if(e.target.checkValidity()){
            e.target.setAttribute('aria-invalid', 'false');
        } else {
            e.target.setAttribute('aria-invalid', 'true');
        }
    }

    return {
        checkVadility
    }
}