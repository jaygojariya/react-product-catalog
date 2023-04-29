import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";


function LngComponent() {
    const { t } = useTranslation();

    const handleChangeLng = (e) => {
        i18next.changeLanguage(e.target.value);
        localStorage.setItem("i18next", e.target.value);
    }

    return (
        <>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="en"
                    name="radio-buttons-group"
                    onChange={(e) => handleChangeLng(e)}
                >
                    <FormControlLabel value="en" control={<Radio />} label="English" />
                    <FormControlLabel value="hi" control={<Radio />} label="Hindi" />
                    <FormControlLabel value="gu" control={<Radio />} label="Gujarati" />
                </RadioGroup>
            </FormControl>
            <p>{t('hello')}</p>
        </>
    );
}

export default React.memo(LngComponent);
