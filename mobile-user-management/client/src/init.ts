import { ApplicationProperties } from 'src/app/core/models/application-properties.interface';

//import { ApplicationProperties } from '@core/models';

export let properties: ApplicationProperties = {} as ApplicationProperties;

export function initConfiguration(): Promise<ApplicationProperties> {
    return new Promise((resolve, _reject) => {
        fetch('properties', {
            method: 'GET'
        })
        .then(response => response.json())
        .then((applicationProperties: ApplicationProperties) => {
            properties = applicationProperties;
		resolve();
        });
    });
}