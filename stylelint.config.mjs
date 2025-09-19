/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard'],
    rules: {
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['grid-template'],
            },
        ],
    },
};
