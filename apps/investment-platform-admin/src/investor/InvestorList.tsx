import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InvestorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Investors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="AboutDescriptionOfFirm"
          source="aboutDescriptionOfFirm"
        />
        <TextField
          label="AssetsAllocatedToAlternativesEuros"
          source="assetsAllocatedToAlternativesEuros"
        />
        <TextField
          label="AssetsAllocatedToAlternativesLocalCurrency"
          source="assetsAllocatedToAlternativesLocalCurrency"
        />
        <TextField
          label="AssetsAllocatedToAlternativesPercentage"
          source="assetsAllocatedToAlternativesPercentage"
        />
        <TextField
          label="AssetsAllocatedToAlternativesUSDollars"
          source="assetsAllocatedToAlternativesUsDollars"
        />
        <TextField
          label="AssetsAllocatedToCashEuros"
          source="assetsAllocatedToCashEuros"
        />
        <TextField
          label="AssetsAllocatedToCashLocalCurrency"
          source="assetsAllocatedToCashLocalCurrency"
        />
        <TextField
          label="AssetsAllocatedToCashPercentage"
          source="assetsAllocatedToCashPercentage"
        />
        <TextField
          label="AssetsAllocatedToCashUSDollars"
          source="assetsAllocatedToCashUsDollars"
        />
        <TextField
          label="AssetsAllocatedToEquitiesEuros"
          source="assetsAllocatedToEquitiesEuros"
        />
        <TextField
          label="AssetsAllocatedToEquitiesLocalCurrency"
          source="assetsAllocatedToEquitiesLocalCurrency"
        />
        <TextField
          label="AssetsAllocatedToEquitiesPercentage"
          source="assetsAllocatedToEquitiesPercentage"
        />
        <TextField
          label="AssetsAllocatedToEquitiesUSDollars"
          source="assetsAllocatedToEquitiesUsDollars"
        />
        <TextField
          label="AssetsAllocatedToFixedIncomeEuros"
          source="assetsAllocatedToFixedIncomeEuros"
        />
        <TextField
          label="AssetsAllocatedToFixedIncomeLocalCurrency"
          source="assetsAllocatedToFixedIncomeLocalCurrency"
        />
        <TextField
          label="AssetsAllocatedToFixedIncomePercentage"
          source="assetsAllocatedToFixedIncomePercentage"
        />
        <TextField
          label="AssetsAllocatedToFixedIncomeUSDollars"
          source="assetsAllocatedToFixedIncomeUsDollars"
        />
        <TextField
          label="AssetsAllocatedToOtherEuros"
          source="assetsAllocatedToOtherEuros"
        />
        <TextField
          label="AssetsAllocatedToOtherLocalCurrency"
          source="assetsAllocatedToOtherLocalCurrency"
        />
        <TextField
          label="AssetsAllocatedToOtherPercentage"
          source="assetsAllocatedToOtherPercentage"
        />
        <TextField
          label="AssetsAllocatedToOtherUSDollars"
          source="assetsAllocatedToOtherUsDollars"
        />
        <TextField
          label="AssetsUnderManagementInEuros"
          source="assetsUnderManagementInEuros"
        />
        <TextField
          label="AssetsUnderManagementInInvestorCurrency"
          source="assetsUnderManagementInInvestorCurrency"
        />
        <TextField
          label="AssetsUnderManagementInUSDollars"
          source="assetsUnderManagementInUsDollars"
        />
        <TextField label="CityFirmsMainOffice" source="cityFirmsMainOffice" />
        <TextField label="contactNumber" source="contactNumber" />
        <TextField label="country" source="country" />
        <TextField
          label="CountryFirmsMainOffice"
          source="countryFirmsMainOffice"
        />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="CurrencyFirmInvestsIn"
          source="currencyFirmInvestsIn"
        />
        <TextField label="email" source="email" />
        <TextField label="EmailAddressOfFirm" source="emailAddressOfFirm" />
        <TextField label="FaxNumberOfFirm" source="faxNumberOfFirm" />
        <TextField
          label="FirmsGeneralInvestmentConsultant"
          source="firmsGeneralInvestmentConsultant"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="LocalLanguageNameOfFirm"
          source="localLanguageNameOfFirm"
        />
        <TextField
          label="MaximumTargetAllocationToAlternativesEuros"
          source="maximumTargetAllocationToAlternativesEuros"
        />
        <TextField
          label="MaximumTargetAllocationToAlternativesLocalCurrency"
          source="maximumTargetAllocationToAlternativesLocalCurrency"
        />
        <TextField
          label="MaximumTargetAllocationToAlternativesPercentage"
          source="maximumTargetAllocationToAlternativesPercentage"
        />
        <TextField
          label="MaximumTargetAllocationToAlternativesUSDollars"
          source="maximumTargetAllocationToAlternativesUsDollars"
        />
        <TextField
          label="MaximumTargetAllocationToCashEuros"
          source="maximumTargetAllocationToCashEuros"
        />
        <TextField
          label="MaximumTargetAllocationToCashLocalCurrency"
          source="maximumTargetAllocationToCashLocalCurrency"
        />
        <TextField
          label="MaximumTargetAllocationToCashPercentage"
          source="maximumTargetAllocationToCashPercentage"
        />
        <TextField
          label="MaximumTargetAllocationToCashUSDollars"
          source="maximumTargetAllocationToCashUsDollars"
        />
        <TextField
          label="MaximumTargetAllocationToEquitiesEuros"
          source="maximumTargetAllocationToEquitiesEuros"
        />
        <TextField
          label="MaximumTargetAllocationToEquitiesLocalCurrency"
          source="maximumTargetAllocationToEquitiesLocalCurrency"
        />
        <TextField
          label="MaximumTargetAllocationToEquitiesPercentage"
          source="maximumTargetAllocationToEquitiesPercentage"
        />
        <TextField
          label="MaximumTargetAllocationToEquitiesUSDollars"
          source="maximumTargetAllocationToEquitiesUsDollars"
        />
        <TextField
          label="MaximumTargetAllocationToFixedIncomeEuros"
          source="maximumTargetAllocationToFixedIncomeEuros"
        />
        <TextField
          label="MaximumTargetAllocationToFixedIncomeLocalCurrency"
          source="maximumTargetAllocationToFixedIncomeLocalCurrency"
        />
        <TextField
          label="MaximumTargetAllocationToFixedIncomePercentage"
          source="maximumTargetAllocationToFixedIncomePercentage"
        />
        <TextField
          label="MaximumTargetAllocationToFixedIncomeUSDollars"
          source="maximumTargetAllocationToFixedIncomeUsDollars"
        />
        <TextField
          label="MaximumTargetAllocationToOtherEuros"
          source="maximumTargetAllocationToOtherEuros"
        />
        <TextField
          label="MaximumTargetAllocationToOtherLocalCurrency"
          source="maximumTargetAllocationToOtherLocalCurrency"
        />
        <TextField
          label="MaximumTargetAllocationToOtherPercentage"
          source="maximumTargetAllocationToOtherPercentage"
        />
        <TextField
          label="MaximumTargetAllocationToOtherUSDollars"
          source="maximumTargetAllocationToOtherUsDollars"
        />
        <TextField
          label="MinimumTargetAllocationToAlternativesEuros"
          source="minimumTargetAllocationToAlternativesEuros"
        />
        <TextField
          label="MinimumTargetAllocationToAlternativesLocalCurrency"
          source="minimumTargetAllocationToAlternativesLocalCurrency"
        />
        <TextField
          label="MinimumTargetAllocationToAlternativesPercentage"
          source="minimumTargetAllocationToAlternativesPercentage"
        />
        <TextField
          label="MinimumTargetAllocationToAlternativesUSDollars"
          source="minimumTargetAllocationToAlternativesUsDollars"
        />
        <TextField
          label="MinimumTargetAllocationToCashEuros"
          source="minimumTargetAllocationToCashEuros"
        />
        <TextField
          label="MinimumTargetAllocationToCashLocalCurrency"
          source="minimumTargetAllocationToCashLocalCurrency"
        />
        <TextField
          label="MinimumTargetAllocationToCashPercentage"
          source="minimumTargetAllocationToCashPercentage"
        />
        <TextField
          label="MinimumTargetAllocationToCashUSDollars"
          source="minimumTargetAllocationToCashUsDollars"
        />
        <TextField
          label="MinimumTargetAllocationToEquitiesEuros"
          source="minimumTargetAllocationToEquitiesEuros"
        />
        <TextField
          label="MinimumTargetAllocationToEquitiesLocalCurrency"
          source="minimumTargetAllocationToEquitiesLocalCurrency"
        />
        <TextField
          label="MinimumTargetAllocationToEquitiesPercentage"
          source="minimumTargetAllocationToEquitiesPercentage"
        />
        <TextField
          label="MinimumTargetAllocationToEquitiesUSDollars"
          source="minimumTargetAllocationToEquitiesUsDollars"
        />
        <TextField
          label="MinimumTargetAllocationToFixedIncomeEuros"
          source="minimumTargetAllocationToFixedIncomeEuros"
        />
        <TextField
          label="MinimumTargetAllocationToFixedIncomeLocalCurrency"
          source="minimumTargetAllocationToFixedIncomeLocalCurrency"
        />
        <TextField
          label="MinimumTargetAllocationToFixedIncomePercentage"
          source="minimumTargetAllocationToFixedIncomePercentage"
        />
        <TextField
          label="MinimumTargetAllocationToFixedIncomeUSDollars"
          source="minimumTargetAllocationToFixedIncomeUsDollars"
        />
        <TextField
          label="MinimumTargetAllocationToOtherEuros"
          source="minimumTargetAllocationToOtherEuros"
        />
        <TextField
          label="MinimumTargetAllocationToOtherLocalCurrency"
          source="minimumTargetAllocationToOtherLocalCurrency"
        />
        <TextField
          label="MinimumTargetAllocationToOtherPercentage"
          source="minimumTargetAllocationToOtherPercentage"
        />
        <TextField
          label="MinimumTargetAllocationToOtherUSDollars"
          source="minimumTargetAllocationToOtherUsDollars"
        />
        <TextField label="name" source="name" />
        <TextField label="NameOfFirm" source="nameOfFirm" />
        <TextField
          label="NumberOfKnownInvestmentsMade"
          source="numberOfKnownInvestmentsMade"
        />
        <TextField
          label="RegionFirmsMainOffice"
          source="regionFirmsMainOffice"
        />
        <TextField
          label="SecondaryOfficeLocationsOfFirm"
          source="secondaryOfficeLocationsOfFirm"
        />
        <TextField
          label="StateOrCountyOfFirmsMainOffice"
          source="stateOrCountyOfFirmsMainOffice"
        />
        <TextField label="StreetAddressOfFirm" source="streetAddressOfFirm" />
        <TextField
          label="TelephoneNumberOfFirm"
          source="telephoneNumberOfFirm"
        />
        <TextField label="TypeOfFirm" source="typeOfFirm" />
        <TextField label="UniqueFirmIdentifier" source="uniqueFirmIdentifier" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WebsiteOfFirm" source="websiteOfFirm" />
        <TextField
          label="YearFirmWasEstablished"
          source="yearFirmWasEstablished"
        />
        <TextField
          label="ZipCodeOfFirmsMainOffice"
          source="zipCodeOfFirmsMainOffice"
        />{" "}
      </Datagrid>
    </List>
  );
};
