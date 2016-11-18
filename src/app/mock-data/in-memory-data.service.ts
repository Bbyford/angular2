import { InMemoryDbService }  from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb(){
          let data = [
            {
                label: 'File',
                icon: 'fa-file-o',
                show: true,
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        show:  true,
                        items: [
                            {label: 'Project',show: true},
                            {label: 'Other',show: true},
                        ]
                    },
                    {label: 'Open',show: true},
                    {label: 'Quit',show: true}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                show: true,
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward',show: true},
                    {label: 'Redo', icon: 'fa-mail-reply',show: true}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                show: true,
                items: [
                    {
                        label: 'Contents',
                        show: true,
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        show: true,
                        items: [
                            {
                                label: 'Text',
                                show: true,
                                items: [
                                    {
                                        label: 'Workspace',
                                        show: true
                                    }
                                ]
                            },
                            {
                                label: 'File',
                                show: true
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                show: true,
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        show: true,
                        items: [
                            {label: 'Save', icon: 'fa-save',show: true},
                            {label: 'Update', icon: 'fa-save',show: true},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        show: true,
                        items: [
                            {label: 'Delete', icon: 'fa-minus',show: true}
                        ]
                    }
                ]
            }
        ];
        return {data};
    }

}