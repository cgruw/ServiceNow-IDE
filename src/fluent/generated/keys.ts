import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "3e2d556419244910a8515704a9cbd915"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "db4f1b21ea2f4c079811b71e799d0da5"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "7deccf2094914b60956d24cf647f4113"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "8df3d605e8e54fc498257e446d0a2e21"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "95a182e278da4594bad88ef59ac55c38",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "6d01786832bc4cbbb4a230e35d2ae665",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "360fb5899be2471c99c4699b36a46898",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
