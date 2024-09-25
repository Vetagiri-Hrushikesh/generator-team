+-----------------------------+       +-----------------------------+
|                             |       |                             |
|      Main Application       +----->+        GlobalProvider       |
|  (Initiates with role and   |       |   (Manages role, package,   |
|       package type)         |       |    and global state)        |
+-----------------------------+       +-----------------------------+
                                           |
                                           v
                                +-----------------------------+
                                |                             |
                                |    featureAccessConfig     |
                                |  (Defines feature access)  |
                                +-----------------------------+
                                           |
                                           v
                                +-----------------------------+
                                |                             |
                                |    canAccessFeature()      |
                                |   (Checks access rights    |
                                |    based on role and       |
                                |    package type from       |
                                |    GlobalProvider state)   |
                                +-----------------------------+
                                           |
                                           v
                            +----------------------------+
                            |                            |
                            |     Feature Components     |
                            | (e.g., IconSizeControl,    |
                            |   BackgroundColorControl)  |
                            |  Rendered based on access  |
                            +----------------------------+
