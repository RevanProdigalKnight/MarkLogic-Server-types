// deno-lint-ignore-file no-empty-interface
/// <reference lib="es5" />

/// <reference path="../builtins/Element.d.ts" />
/// <reference path="../builtins/Node.d.ts" />
/// <reference path="../builtins/Sequence.d.ts" />

/// <reference path="./cts.d.ts" />
/// <reference path="./xs.d.ts" />

declare module 'sec' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/MarkLogic/security.xqy'): sec.Security;
			}

			namespace md {
				interface EntityDescriptor {}
			}

			namespace sec {
				type ID = number | string;

				interface credential {}
				interface ldapServer {}
				interface permission {}
				interface samlServer {}

				interface ampElement extends Element {}
				interface collectionElement extends Element {}
				interface credentialElement extends Element {}
				interface credentialTargetElement extends Element {}
				interface ldapServerElement extends Element {}
				interface passwordExtraElement extends Element {}
				interface pathNamespaceElement extends Element {}
				interface permissionElement extends Element {}
				interface privilegeElement extends Element {}
				interface queryRolesetElement extends Element {}
				interface queryRolesetsElement extends Element {}
				interface samlEntityElement extends Element {}
				interface samlServerElement extends Element {}

				type PrivilegeType = 'execute' | 'uri';

				interface Security {
					addQueryRolesets(qrss: queryRolesetsElement[]): Sequence<ID>;
					ampAddRoles(namespace: string, localName: string, documentUri: string, database: ID, roleNames: string[]): null;
					ampDocCollections(): Sequence<string>;
					ampDocPermissions(): Sequence<permission>;
					ampExists(namespace: string, localName: string, documentUri: string, database: ID): boolean;
					ampGetRoles(namespace: string, localName: string, documentUri: string, database: ID): Sequence<string>;
					ampRemoveRoles(namespace: string, localName: string, documentUri: string, database: ID, roleNames: string[]): null;
					ampsChangeModulesDatabase(oldDb: ID, newDb: ID): Sequence;
					ampsCollection(): string;
					ampSetRoles(namespace: string, localName: string, documentUri: string, database: ID, roleNames: string[]): null;
					checkAdmin(): null;
					collectionAddPermissions(uri: string, permissions: permission[]): null;
					collectionGetPermissions(uri: string): Sequence<permission>;
					collectionRemovePermissions(uri: string, permissions: permission[]): null;
					collectionsCollection(): string;
					collectionSetPermissions(uri: string, permissions: permission[]): null;
					compartmentGetRoles(compartmentName: string): Sequence<string>;
					createAmp(namespace: string, localName: string, documentUri: string, database: xs.anyAtomicType, roleNames: string[]): ID;
					createCredential(name: string, description: string, username: string, password: string, certificate: string, privateKey: string, signing: boolean, targets: credentialTargetElement[], permissions: permissionElement): ID;
					createExternalSecurity(externalSecurityName: string, description: string, authentication: string, cacheTimeout: number, authorization: string, ldapServer: ldapServer, samlServer: samlServer): ID;
					createPrivilege(privilegeName: string, action: string, kind: string, roleNames: string[]): ID;
					createRole(roleName: string, description: string, roleNames: string[], permissions: permission[], collections: string[], compartment?: string, externalNames?: string[], queries?: Record<string, cts.query>): ID;
					createUser(userName: string, description: string, password: string, permissions: permission[], collections: string[], compartment?: string, externalNames?: string[], queries?: Record<string, cts.query>): ID;
					createUserWithRole(userName: string, description: string, password: string, permissions: permission[], collections: string[], externalNames: string[]): ID;
					credentialGetCertificate(credentialName: string): string;
					credentialGetDescription(credentialName: string): string;
					credentialGetId(credentialName: string): ID;
					credentialGetPassword(credentialName: string): string;
					credentialGetPermissions(credentialName: string): Sequence<permission>;
					credentialGetPivateKey(credentialName: string): string;
					credentialGetSigning(credentialName: string): boolean;
					credentialGetTargets(credentialName: string): Sequence<credentialTargetElement>;
					credentialGetUsername(credentialName: string): string;
					credentialSetCertificate(credentialName: string, certificate: string, privateKey: string): null;
					credentialSetDescription(credentialName: string, description: string): null;
					credentialSetName(credentialName: string, newName: string): null;
					credentialSetPassword(credentialName: string, password: string): null;
					credentialSetPermissions(credentialName: string, permissions: permission[]): null;
					credentialSetSigning(credentialName: string, signing: boolean): null;
					credentialSetTargets(credentialName: string, targets: credentialTargetElement[]): null;
					credentialSetUsername(credentialName: string, username: string): null;
					credentialsGetAws(): Sequence<string>;
					credentialsGetAzure(): Sequence<string>;
					credentialsSetAws(accessKey: string, secretKey: string, sessionToken?: string): null;
					credentialsSetAzure(storageAccount: string, storageKey: string): null;
					externalSecurityClearCache(externalSecurityName: string): null;
					externalSecurityGetAuthentication(externalSecurityName: string): string;
					externalSecurityGetAuthorization(externalSecurityName: string): string;
					externalSecurityGetCacheTimeout(externalSecurityName: string): number;
					externalSecurityGetDescription(externalSecurityName: string): string;
					externalSecurityGetHttpOptions(externalSecurityName: string): Node;
					externalSecurityGetLdapAttribute(externalSecurityName: string): string;
					externalSecurityGetLdapBase(externalSecurityName: string): string;
					externalSecurityGetLdapBindMethod(externalSecurityName: string): string;
					externalSecurityGetLdapCertificate(externalSecurityName: string): string;
					externalSecurityGetLdapDefaultUser(externalSecurityName: string): string;
					externalSecurityGetLdapMemberAttribute(externalSecurityName: string): string;
					externalSecurityGetLdapMemberofAttribute(externalSecurityName: string): string;
					externalSecurityGetLdapNestedLookup(externalSecurityName: string): boolean;
					externalSecurityGetLdapPrivateKey(externalSecurityName: string): string;
					externalSecurityGetLdapRemoveDomain(externalSecurityName: string): boolean;
					externalSecurityGetLdapServerUri(externalSecurityName: string): string;
					externalSecurityGetLdapStartTls(externalSecurityName: string): boolean;
					externalSecurityGetSamlAssertionHost(externalSecurityName: string): string;
					externalSecurityGetSamlAttributeNames(externalSecurityName: string): Sequence<string>;
					externalSecurityGetSamlDestination(externalSecurityName: string): string;
					externalSecurityGetSamlEntityId(externalSecurityName: string): string;
					externalSecurityGetSamlIdpCertificateAuthority(externalSecurityName: string): string;
					externalSecurityGetSamlIssuer(externalSecurityName: string): string;
					externalSecurityGetSamlPrivilegeAttributeName(externalSecurityName: string): string;
					externalSecurityGetSamlSpCertificate(externalSecurityName: string): string;
					externalSecuritySetAuthentication(externalSecurityName: string, authentication: string): null;
					externalSecuritySetAuthorization(externalSecurityName: string, authorization: string): null;
					externalSecuritySetCacheTimeout(externalSecurityName: string, cacheTimeout: number): null;
					externalSecuritySetDescription(externalSecurityName: string, description: string): null;
					externalSecuritySetHttpOptions(externalSecurityName: string, httpOptions: Node): null;
					externalSecuritySetLdapAttribute(externalSecurityName: string, ldapAttribute: string): null;
					externalSecuritySetLdapBase(externalSecurityName: string, ldapBase: string): null;
					externalSecuritySetLdapBindMethod(externalSecurityName: string, ldapBindMethod: string): null;
					externalSecuritySetLdapCertificate(externalSecurityName: string, ldapCertificate: string, ldapPrivateKey: string): null;
					externalSecuritySetLdapDefaultUser(externalSecurityName: string, ldapDefaultUser: string): null;
					externalSecuritySetLdapMemberAttribute(externalSecurityName: string, ldapMemberAttribute: string): null;
					externalSecuritySetLdapMemberofAttribute(externalSecurityName: string, ldapMemberofAttribute: string): null;
					externalSecuritySetLdapNestedLookup(externalSecurityName: string, ldapNestedLookup: boolean): null;
					externalSecuritySetLdapPassword(externalSecurityName: string, ldapPassword: string): null;
					externalSecuritySetLdapRemoveDomain(externalSecurityName: string, ldapRemoveDomain?: boolean): null;
					externalSecuritySetLdapServerUri(externalSecurityName: string, ldapServerUri: string): null;
					externalSecuritySetLdapStartTls(externalSecurityName: string, ldapStartTls?: boolean): null;
					externalSecuritySetName(externalSecurityName: string, newExternalSecurityName: string): null;
					externalSecuritySetSamlAssertionHost(externalSecurityName: string, samlAssertionHost: string): null;
					externalSecuritySetSamlAttributeNames(externalSecurityName: string, samlAttributeNames: string[]): null;
					externalSecuritySetSamlDestination(externalSecurityName: string, samlDestination: string): null;
					externalSecuritySetSamlEntityId(externalSecurityName: string, samlEntityId: string): null;
					externalSecuritySetSamlIdpCertificateAuthority(externalSecurityName: string, samlIdpCertificateAuthority: string): null;
					externalSecuritySetSamlIssuer(externalSecurityName: string, samlIssuer: string): null;
					externalSecuritySetSamlPrivilegeAttributeName(externalSecurityName: string, samlPrivilegeAttributeName: string): null;
					externalSecuritySetSamlSpCertificate(externalSecurityName: string, samlSpCertificate: string): null;
					getAmp(namespace: string, localName: string, documentUri: string, database: ID): ampElement;
					getCollection(uri: string): collectionElement;
					getCompartmetns(): Sequence;
					getCredential(credentialName: string): credentialElement;
					getCredentialById(credentialId: ID): credentialElement;
					getCredentialIds(): Sequence<ID>;
					getCredentialNames(): Sequence<string>;
					getDistinctPermissions(inputPerms: permissionElement[], outputPerms: permissionElement[]): Sequence<permissionElement>;
					getPrivilege(action: string, kind: string): privilegeElement;
					getRoleIds(roleNames?: string[]): Sequence<ID>;
					getRoleNames(roleIds: ID[]): Sequence<string>;
					getSamlEntity(samlEntityId: string): samlEntityElement;
					getSamlEntityIds(): Sequence<string>;
					getUserNames(userIds: ID[]): Sequence<string>;
					ldapServer(ldapServerUri: string, ldapBase: string, ldapAttribute: string, ldapDefaultUser: string, ldapPassword: string, ldapBindMethod: string, ldapMemberofAttribute?: string, ldapMemberAttribute?: string, ldapStartTls?: boolean, ldapCertificate?: string, ldapPrivateKey?: string, ldapNestedLookup?: boolean): ldapServerElement;
					pathAddPermissions(path: string, pathNamespaces: pathNamespaceElement[], permissions: permissionElement[]): null;
					pathGetPermissions(path: string, pathNamespaces: pathNamespaceElement[]): Sequence<permission>;
					pathRemovePermissions(path: string, pathNamespaces: pathNamespaceElement[], permissions: permissionElement[]): null;
					pathSetPermissions(path: string, pathNamespaces: pathNamespaceElement[], permissions: permissionElement[]): null;
					privDocCollections(): Sequence<string>;
					privDocPermissions(): Sequence<permissionElement>;
					privilegeAddRoles(action: string, kind: PrivilegeType, roleNames: string[]): null;
					privilegeGetRoles(action: string, kind: PrivilegeType): Sequence<string>;
					privilegeRemoveRoles(action: string, kind: PrivilegeType, roleNames: string[]): null;
					privilegesCollection(): string;
					privilegeSetName(action: string, kind: PrivilegeType, newPrivilegeName: string): null;
					privilegeSetRoles(action: string, kind: PrivilegeType, roleNames: string[]): null;
					protectCollection(uri: string, permissions: permissionElement[]): ID;
					protectedPathDocPermissions(): Sequence<permissionElement>;
					protectedPathsCollection(): string;
					protectPath(path: string, pathNamespaces: pathNamespaceElement[], permissions: permissionElement[], pathSet: string): ID;
					queryRoleset(roleNames: string[]): queryRolesetElement;
					queryRolesets(roleSets: queryRolesetElement[]): queryRolesetsElement;
					queryRolesetsCollection(): string;
					queryRolesetsDocPermissions(): Sequence<permissionElement>;
					queryRolesetsId(rolesets: queryRolesetsElement): ID;
					removeAmp(namespace: string, localName: string, documentUri: string, database: xs.anyAtomicType): null;
					removeCredential(credentialName: string): null;
					removeCredentialById(credentialId: ID): null;
					removeExternalSecurity(externalSecurityName: string): null;
					removePath(path: string, pathNamespaces: pathNamespaceElement[]): null;
					removePrivilege(action: string, kind: PrivilegeType): null;
					removeQueryRolesets(qrss: queryRolesetsElement[]): null;
					removeRole(roleName: string): null;
					removeRoleFromAmps(roleName: string): null;
					removeRoleFromPrivileges(roleName: string): null;
					removeRoleFromRoles(roleName: string): null;
					removeRoleFromUsers(roleName: string): null;
					removeUser(userName: string): null;
					resecureCredentials(): null;
					roleAddRoles(roleName: string, newRoles: string[]): null;
					roleDocCollections(): Sequence<string>;
					roleDocPermissions(): Sequence<permissionElement>;
					roleExists(roleName: string): boolean;
					roleGetCompartment(roleName: string): string;
					roleGetDefaultCollections(roleName: string): Sequence<string>;
					roleGetDefaultPermissions(roleName: string): Sequence<permissionElement>;
					roleGetDescription(roleName: string): string;
					roleGetExternalNames(roleName: string): Sequence<string>;
					roleGetQueries(roleName: string): Record<string, cts.query>;
					roleGetRoles(roleName: string): Sequence<string>;
					rolePrivileges(roleName: string): Sequence<privilegeElement>;
					roleRemoveRoles(roleName: string, roleNames: string[]): null;
					rolesCollection(): string;
					roleSetDefaultCollections(roleName: string, collections: string[]): null;
					roleSetDefaultPermissions(roleName: string, permissions: permissionElement[]): null;
					roleSetDescription(roleName: string, description: string): null;
					roleSetExternalNames(roleName: string, externalNames: string[]): null;
					roleSetName(roleName: string, newRoleName: string): null;
					roleSetQueries(roleName: string, queries: Record<string, cts.query>): null;
					roleSetQuery(roleName: string, capability: string, query: cts.query): null;
					roleSetRoles(roleName: string, roleNames: string[]): null;
					samlEntityDelete(samlEntityId: string): null;
					samlEntityInsert(entity: md.EntityDescriptor): ID;
					samlServer(samlEntityId: string, samlAttributeNames: string[], samlPrivilegeAttributeName: string, httpOptions?: Node, samlDestination?: string, samlIssuer?: string, samlIdpCertificateAuthority?: string, samlSpCertificate?: string, samlSpPrivateKey?: string): samlServerElement;
					securityCollection(): string;
					securityInstalled(): boolean;
					securityNamespace(): string;
					securityPathNamespace(prefix: string, namespaceUri: string): pathNamespaceElement;
					securityVersion(): number;
					setRealm(realm: string): null;
					uidForName(name: string): Sequence<ID>;
					unprotectCollection(uri: string): null;
					unprotectPath(path: string, pathNamespaces: pathNamespaceElement[]): null;
					uriCredentialTarget(uriPattern: string, authentication: string): credentialTargetElement;
					userAddRoles(userName: string, roleNames: string[]): null;
					userDocCollections(): Sequence<string>;
					userDocPermissions(): Sequence<permissionElement>;
					userExists(userName: string): boolean;
					userGetDefaultCollections(userName: string): Sequence<string>;
					userGetDefaultPermissions(userName: string): Sequence<permissionElement>;
					userGetDescription(userName: string): string;
					userGetExternalNames(userName: string): Sequence;
					userGetpasswordExtra(userName: string): passwordExtraElement;
					userGetQueries(userName: string): Record<string, cts.query>;
					userGetRoles(userName: string): Sequence<string>;
					userPrivileges(userName: string): Sequence<privilegeElement>;
					userRemoveRoles(userName: string, roleNames: string[]): null;
					usersCollection(): string;
					userSetDefaultCollections(userName: string, collections: string[]): null;
					userSetDefaultPermissions(userName: string, permissions: permissionElement[]): null;
					userSetDescription(userName: string, description: string): null;
					userSetExternalNames(userName: string, externalNames: string[]): null;
					userSetName(userName: string, newUserName: string, password: string): null;
					userSetPassword(userName: string, password: string): null;
					userSetPasswordExtra(userName: string, passwordExtra: passwordExtraElement): null;
					userSetQueries(userName: string, queries: Record<string, cts.query>): null;
					userSetQuery(userName: string, capability: string, query: cts.query): null;
					userSetRoles(userName: string, roleNames: string[]): null;
					validatePermissions(permissions: permissionElement[]): Sequence;
				}
			}
		}
	}
}
