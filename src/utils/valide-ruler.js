const IM_TYPE = ['input', 'radio', 'checkbox', 'date'];

/**
 * RULER[options]
 * required
 * type
 * min
 * max
 * len
 * notWhitespace
 * pattern
 * custom
 */
const DEFAULT_RULER = (input) => {
    return {[input]: {
        required: true
    }}
}

export function getRulerOptions(type, mixOption = {}) {
    return Object.assign(DEFAULT_RULER(type), mixOption)
}